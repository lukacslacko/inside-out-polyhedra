w = 4;
cover = 0.6;
cover_gap = 0.2;
dovetail_tension = 0.08;
dovetail_shape = 0.4;
dovetail_depth = 3;

wall_angle = 45;
fold_angle = 20;

hinge_wall = 7;
hinge_gap = 0.3;
hinge_hole_d = 2.2;
hinge_inner_d = 1.8;

depth = w/2/tan(fold_angle);
offs = depth-w/2*tan(wall_angle);

$fn = 40;

module roundpoly(v) {
    hull() {
        for (i=[0:1:len(v)-1]) 
            translate(v[i]) {
            cylinder(d=0.1,h=w,center=true);
            cylinder(d=w,h=0.1,center=true);
        }
    }
}

function vert4(e) = 
    let(a = e/2 - offs - w/2) 
    [[-a,-a],[a,-a],[a,a],[-a,a]];

module hinge_piece(l, b) {
    h_middle = l-hinge_wall-hinge_gap;
    difference() {
        union() {
            cylinder(d=w, h=h_middle, center=true);
            translate([0,b/2,0])
            cube([w,b,h_middle],center=true);
        }
        cylinder(d=hinge_hole_d, h=l, center=true);
    }
    cylinder(d=hinge_inner_d, h=l, center=true);
    difference() {
        cylinder(d=w, h=l, center=true);
        cylinder(d=w+1,h=l-hinge_wall,center=true);
    }
    translate([0,-b/2,0]) difference() {
        cube([w,b,l],center=true);
        cube([w+1,b+1,l-hinge_wall],center=true);
    }
    intersection() {
        cube([w,2*b,l],center=true);
        difference() {
            for (y=[-b,b]) translate([0,y,0])
            rotate(45)
            cube([w/sqrt(2),w/sqrt(2),l],center=true);
            cylinder(d=w+1,h=l+1,center=true);
        }
    }
}

module hinge_pieces(l, b, n) {
    translate([0,0,l/2/n-l/2])
    for (i=[0:1:n-1])
        translate([0,0,i*l/n])
        hinge_piece(l/n,b);
}

module add_hinge(p,q,n) {
    m=(p+q)/2;
    v=q-p;
    ang=atan2(v[1],v[0]);
    translate(m)
    rotate(ang)
    rotate([0,90,0])
    hinge_pieces(norm(v), depth, n);
    difference() {
        children();
        translate(m) rotate(ang) 
        cube([norm(m),2*w,2*w], center=true);
    }
}

function zig(length, tension_direction, y_dir) = 
    let(d=-y_dir*dovetail_depth/2*dovetail_shape)
    let(x=length/4)
    let(t=tension_direction*dovetail_tension*y_dir)
    [
        [0, t],
        [x+d, t],
        [x-d, t+dovetail_depth*y_dir],
        [3*x+d, t+dovetail_depth*y_dir],
        [3*x-d, t],
        [length, t]
    ];

function move(pt, vec) = [for (p=vec) p+pt];
    
function flatten(v) = [for(vv=v) for (x=vv) x];
    
e = 50;
vs = vert4(e);
A = abs(vs[0][0]);
E = e/2;
D = E-A;
F = D + dovetail_depth;// + w/2/sqrt(2);
G = A - dovetail_depth;// - w/2/sqrt(2);

module keep_for_face_large() {
    translate([0,0,w/2-cover])
    linear_extrude(cover)
    polygon([[G,F],[-G,2*E-F],[-G,F]]);
}

module keep_for_face_small() {
    translate([0,0,-w/2])
    linear_extrude(cover+cover_gap)
    polygon([[A,D],[-A,2*E-D],[-A,D]]);
}

function rot90(v) = [for(p=v) [p[1],-p[0]]];

module keep_for_face_middle() {
    v = flatten([
        move([0,E], rot90(move([-G,F-E], zigs(2*G, 4, -1, -1)))),
        [[1-E,0],[E,0],[E,2*E],[1-E,2*E]],
    ]);
    translate([0,0,-w/2+cover+cover_gap])
    linear_extrude(w-2*cover-cover_gap)
    intersection() {
        polygon(v);
        polygon([[-E,0],[E,0],[-E,2*E]]);
        translate([0,E,0])
        rotate(90)
        translate([0,-E,0]) polygon(v);
    }
}

module keep_for_hinge_large() {
    translate([0,0,w/2-cover])
    linear_extrude(cover)
    polygon(flatten(
    [
        [[E,0],[G,F],[-G,F],[-E,0],[-G,-F],[G,-F]]
    ]
    ));
}

module keep_for_hinge_small() {
    translate([0,0,-w/2])
    linear_extrude(cover+cover_gap)
    polygon(flatten(
    [
        [[E,0],[A,D],[-A,D],[-E,0],[-A,-D],[A,-D]]
    ]
    ));
}

function zigs(length, n, tension_direction, y_dir) =
    flatten([
        for(i=[0:1:n-1]) 
            move(
                [length/n*i,0],
                zig(length/n, tension_direction, y_dir))
    ]);


module keep_for_hinge_middle() {
    translate([0,0,-w/2+cover+cover_gap])
    linear_extrude(w-2*cover-cover_gap)
    polygon(flatten(
    [
        [[-E,0],[-G,F]],
        move([-G,F], zigs(2*G, 4, 1, -1)),
        [[E,0],[G,-F]],
        move([G,-F], zigs(-2*G, 4, 1, 1)),
    ]
    ));
}


module connected() { 
    add_hinge([-A,0],[A,0],3) 
    for (a=[0,180]) rotate(a)
    translate([0,e/2,0])
    roundpoly(vs);
}

module conn() {
    intersection() {
        connected();
        union() {
            keep_for_hinge_small();
            keep_for_hinge_large();
            keep_for_hinge_middle();
        }
    }
}

module face() {
    keep_for_face_middle();
    keep_for_face_small();
    keep_for_face_large();
}

/*
mirror([0,0,1])
translate([0,-6,0])
color("red")
conn();
*/
for (a=[0,180]) rotate(a)
translate([-1,-E-1,0])
face();