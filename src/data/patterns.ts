export default [
    {
        title: "ALL EDGES ORIENTED CORRECTLY",
        id: "section-edges-correct",
        patterns: [
            {
                pattern: [
                    [2, 1, 0, 0, 2],
                    [0, 0, 1, 0, 1],
                    [0, 1, 1, 1, 0],
                    [0, 1, 1, 0, 0],
                    [2, 0, 0, 1, 2],
                ],
                solution: '#green R U2 R`',
                production: 'R U2 R` U` R U` R`',
            },
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [1, 0, 1, 1, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 1, 0, 1],
                    [2, 1, 0, 0, 2],
                ],
                solution: 'R U2 R` U` R U` R`',
                production: '#green R U2 R`'
            },
            {
                pattern: [
                    [2, 0, 0, 1, 2],
                    [1, 0, 1, 0, 0],
                    [0, 1, 1, 1, 0],
                    [1, 0, 1, 0, 0],
                    [2, 0, 0, 1, 2],
                ],
                solution: 'R U2` R2` U` R2 U` R2` U2 R',
                production: 'R U2` R2` U` R2 U` R2` U2 R',
            },
            {
                pattern: [
                    [2, 1, 0, 1, 2],
                    [0, 0, 1, 0, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 1, 0, 0],
                    [2, 1, 0, 1, 2],
                ],
                solution: 'y (R` U` R) U` (R` U R) U` (R` U2 R)',
                production: 'y (R` U` R) U` (R` U R) U` (R` U2 R)',
            },
            {
                pattern: [
                    [2, 1, 0, 0, 2],
                    [0, 0, 1, 1, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 1, 1, 0],
                    [2, 1, 0, 0, 2],
                ],
                solution: '#red2 #blue2',
                production: 'F` #red2 (r` F R)',
            },
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [1, 0, 1, 1, 0],
                    [0, 1, 1, 1, 0],
                    [0, 1, 1, 0, 0],
                    [2, 0, 0, 1, 2],
                ],
                solution: 'F` #red2 (r` F R)',
                production: '#red2 #blue2'
            },
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [0, 1, 1, 1, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 1, 0, 0],
                    [2, 1, 0, 1, 2],
                ],
                solution: 'R2 [D (R` U2) R] [D` (R` U2) R`]',
                production: '#red2 #blue2 U #green R U2 R`',
            },
        ]
    },
    {
        title: "CORNERS CORRECT, EDGES FLIPPED",
        id: 'section-corners-correct',
        patterns: [
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 1, 0],
                    [0, 1, 1, 1, 0],
                    [0, 1, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: '#red M` (U R U` r`)',
                production: '#red M` (U R U` r`) #red M` (U R U` r`)',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 1, 0],
                    [1, 0, 1, 1, 0],
                    [0, 1, 1, 1, 0],
                    [2, 0, 0, 0, 2],
                ],
                solution: 'M` U M U2 M` U M',
                production: '#red M` (U R U` r`)',
            },
        ]
    },
    {
        title: "P-SHAPES",
        id: 'section-p-shapes',
        patterns: [
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 1, 0],
                    [1, 0, 1, 1, 0],
                    [1, 0, 1, 1, 0],
                    [2, 0, 0, 0, 2],
                ],
                solution: 'f #red f`',
                production: 'F #red F`',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 0, 1],
                    [0, 1, 1, 0, 1],
                    [0, 1, 1, 0, 1],
                    [2, 0, 0, 0, 2],
                ],
                solution: 'f` #redinvert f',
                production: 'R` U` #blue U R',
            },
            {
                pattern: [
                    [2, 1, 1, 0, 2],
                    [0, 0, 0, 1, 0],
                    [1, 0, 1, 1, 0],
                    [0, 0, 1, 1, 0],
                    [2, 1, 0, 0, 2],
                ],
                solution: 'R d L` d` R` U R B R`',
                production: '#greeninvert (L` U L U) #blueinvert',
            },
            {
                pattern: [
                    [2, 0, 1, 1, 2],
                    [0, 1, 0, 0, 0],
                    [0, 1, 1, 0, 1],
                    [0, 1, 1, 0, 0],
                    [2, 0, 0, 1, 2],
                ],
                solution: 'L` d` R d L U` L` B` L',
                production: '#green (R U` R` U`) #blue',
            },
        ]
    },
    {
        title: "W-SHAPES",
        id: 'section-w-shapes',
        patterns: [
            {
                pattern: [
                    [2, 1, 0, 0, 2],
                    [0, 0, 1, 1, 0],
                    [0, 1, 1, 0, 1],
                    [0, 1, 0, 0, 1],
                    [2, 0, 1, 0, 2],
                ],
                solution: '#green (R U` R` U`) #blue',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 0, 1, 2],
                    [0, 1, 1, 0, 0],
                    [1, 0, 1, 1, 0],
                    [1, 0, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: '#greeninvert (L` U L U) #blueinvert',
                production: '',
            },
        ]
    },
    {
        title: "SQUARES",
        id: 'section-squares',
        patterns: [
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [1, 0, 1, 1, 0],
                    [1, 0, 1, 1, 0],
                    [0, 0, 0, 0, 1],
                    [2, 1, 1, 0, 2],
                ],
                solution: 'r U2 R` U` R U` r`',
                production: '#green2 R U2 r`',
            },
            {
                pattern: [
                    [2, 1, 1, 0, 2],
                    [0, 0, 0, 0, 1],
                    [1, 0, 1, 1, 0],
                    [1, 0, 1, 1, 0],
                    [2, 0, 0, 0, 2],
                ],
                solution: 'r` U2 #green r',
                production: 'r` U` R U` R` U2 r',
            },
        ]
    },
    {
        title: "L-SHAPES",
        id: 'section-l-shapes',
        patterns: [
            {
                pattern: [
                    [2, 0, 0, 1, 2],
                    [1, 0, 1, 0, 0],
                    [0, 1, 1, 0, 1],
                    [1, 0, 0, 0, 0],
                    [2, 0, 1, 1, 2],
                ],
                solution: 'F #red #red F`',
                production: 'f #red #red f`',
            },
            {
                pattern: [
                    [2, 1, 0, 0, 2],
                    [0, 0, 1, 0, 1],
                    [1, 0, 1, 1, 0],
                    [0, 0, 0, 0, 1],
                    [2, 1, 1, 0, 2],
                ],
                solution: 'F` #redinvert #redinvert F',
                production: 'R` U2 R2 U R` U R U2 x` U` R` U',
            },
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [1, 0, 1, 0, 1],
                    [0, 1, 1, 0, 1],
                    [1, 0, 0, 0, 1],
                    [2, 0, 1, 0, 2],
                ],
                solution: 'y2 r` U` R U` R` U R U` R` U2 r',
                production: 'y2 r` U` R U` R` U R U` R` U2 r',
            },
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [1, 0, 1, 0, 1],
                    [1, 0, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [2, 0, 1, 0, 2],
                ],
                solution: '#green2 R U` R` U R U2 r`',
                production: '#green2 R U` R` U R U2 r`',
            },
            {
                pattern: [
                    [2, 0, 0, 1, 2],
                    [1, 0, 1, 0, 0],
                    [1, 0, 1, 1, 0],
                    [1, 0, 0, 0, 0],
                    [2, 0, 1, 1, 2],
                ],
                solution: '#blue3 R2 U2 y #blue',
                production: 'R` F R2 B` R2 F` R2 B R`',
            },
            {
                pattern: [
                    [2, 1, 0, 0, 2],
                    [0, 0, 1, 0, 1],
                    [0, 1, 1, 0, 1],
                    [0, 0, 0, 0, 1],
                    [2, 1, 1, 0, 2],
                ],
                solution: 'R` F R2 B` R2 F` R2 B R`',
                production: 'F #red R F` #red2 r`',
            },
        ]
    },
    {
        title: "FISH SHAPES",
        id: 'section-fish-shapes',
        patterns: [
            {
                pattern: [
                    [2, 0, 0, 1, 2],
                    [1, 0, 1, 0, 0],
                    [0, 1, 1, 0, 1],
                    [0, 0, 0, 1, 0],
                    [2, 1, 1, 0, 2],
                ],
                solution: '#red R` F R2 U R` U` F',
                production: 'F U R U` R2 F` R (U R U` R`)',
            },
            {
                pattern: [
                    [2, 1, 1, 0, 2],
                    [0, 0, 0, 1, 0],
                    [0, 1, 1, 0, 1],
                    [1, 0, 1, 0, 0],
                    [2, 0, 0, 1, 2],
                ],
                solution: '#green #blue R U2 R`',
                production: 'R` F R U R` F` R y` R U` R`',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 0, 1],
                    [1, 0, 1, 1, 0],
                    [0, 0, 1, 1, 0],
                    [2, 1, 0, 0, 2],
                ],
                solution: '(R U2 R`) #blue (R U2 R`)',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [0, 1, 1, 0, 1],
                    [0, 1, 1, 0, 1],
                    [0, 0, 0, 1, 0],
                    [2, 1, 1, 0, 2],
                ],
                solution: 'F R U` R` U` R U R` F`',
                production: '(R U2 R`) #blue (R U2 R`)',
            },
        ]
    },
    {
        title: "AWKWARD SHAPES",
        id: 'section-awkward-shapes',
        patterns: [
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 1, 0],
                    [1, 0, 1, 1, 0],
                    [1, 0, 1, 0, 1],
                    [2, 0, 0, 0, 2],
                ],
                solution: 'R2 U R` B` R U` R2 U R B R`',
                production: '',
            },
            {
                pattern: [
                    [2, 1, 0, 0, 2],
                    [0, 0, 1, 1, 0],
                    [0, 1, 1, 0, 1],
                    [0, 0, 0, 1, 0],
                    [2, 1, 1, 0, 2],
                ],
                solution: '[F #red F`] U2 [ #red #blue ]',
                production: '',
            },
            {
                pattern: [
                    [2, 1, 0, 1, 2],
                    [0, 0, 1, 0, 0],
                    [0, 1, 1, 0, 1],
                    [0, 1, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: '[ #green R U2 R`] [F #red F`]',
                production: 'R` F R U R` F` R y` R U` R` M U #red M` #blue',
            },
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [1, 0, 1, 1, 0],
                    [0, 1, 1, 0, 1],
                    [1, 0, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: '#blue #blue #red (R U R`)',
                production: '',
            },
        ]
    },
    {
        title: "LIGHTNING BOLTS",
        id: 'section-lightning',
        patterns: [
            {
                pattern: [
                    [2, 1, 0, 0, 2],
                    [0, 0, 1, 0, 1],
                    [0, 1, 1, 0, 1],
                    [0, 1, 0, 0, 0],
                    [2, 0, 1, 1, 2],
                ],
                solution: '#green2 R U2 r`',
                production: 'r U2 R` U` R U` r`',
            },
            {
                pattern: [
                    [2, 0, 1, 1, 2],
                    [0, 1, 0, 0, 0],
                    [0, 1, 1, 0, 1],
                    [0, 0, 1, 0, 1],
                    [2, 1, 0, 0, 2],
                ],
                solution: 'r` U` R U` R` U2 r',
                production: 'r` U2 #green r',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 0, 1],
                    [0, 1, 1, 0, 1],
                    [1, 0, 1, 0, 0],
                    [2, 0, 0, 1, 2],
                ],
                solution: 'y #green2 #blue R U2 r`',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 1, 0],
                    [1, 0, 1, 1, 0],
                    [0, 0, 1, 0, 1],
                    [2, 1, 0, 0, 2],
                ],
                solution: '[F #red F`] U [F #red F`]',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 1, 0],
                    [0, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0],
                    [2, 0, 1, 1, 2],
                ],
                solution: 'y2 L F` #redinvert F U` L`',
                production: 'R d L` d` R` U R B R`',
            },
            {
                pattern: [
                    [2, 0, 1, 1, 2],
                    [0, 1, 0, 0, 0],
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: 'R` [F #red F`] U R',
                production: 'y2 L` d` R d L U` L` B` L',
            },
        ]
    },
    {
        title: "T-SHAPES",
        id: 'section-t-shapes',
        patterns: [
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 1, 0],
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: 'F #red F`',
                production: 'f #red f`',
            },
            {
                pattern: [
                    [2, 1, 1, 0, 2],
                    [0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 0, 1, 0],
                    [2, 1, 1, 0, 2],
                ],
                solution: '#red #blue',
                production: 'F R U` R` U` R U R` F`',
            },
        ]
    },
    {
        title: "C-SHAPES",
        id: 'section-c-shapes',
        patterns: [
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [0, 1, 1, 0, 1],
                    [1, 0, 1, 0, 1],
                    [0, 1, 1, 0, 1],
                    [2, 0, 0, 0, 2],
                ],
                solution: 'R` U` #blue U R',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0],
                    [0, 1, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: '#red x D` R` U R U` D x`',
                production: 'F R U` R` U` R U R` F`(R U2 R`) #blue (R U2 R`) ',
            },
        ]
    },
    {
        title: "I-SHAPES",
        id: 'section-i-shapes',
        patterns: [
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [1, 0, 1, 0, 1],
                    [1, 0, 1, 0, 1],
                    [1, 0, 1, 0, 1],
                    [2, 0, 0, 0, 2],
                ],
                solution: 'R` U2 R2 U R` U R U2 x` U` R` U',
                production: '',
            },
            {
                pattern: [
                    [2, 1, 0, 0, 2],
                    [0, 0, 1, 0, 1],
                    [1, 0, 1, 0, 1],
                    [0, 0, 1, 0, 1],
                    [2, 1, 0, 0, 2],
                ],
                solution: 'R` U` R U` R` d R` U R B',
                production: 'R` U` R U` R` d R` U R B',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [2, 0, 1, 0, 2],
                ],
                solution: 'F #red R F` #red2 r`',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 1, 1, 2],
                    [1, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 0],
                    [2, 0, 1, 1, 2],
                ],
                solution: 'f #red #red f`',
                production: 'F #red #red F`',
            },
        ]
    },
    {
        title: "KNIGHT MOVE SHAPES",
        id: 'section-knight',
        patterns: [
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 1, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 0, 0, 1],
                    [2, 1, 1, 0, 2],
                ],
                solution: '(r U r`) #red (r U` r`)',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 0, 1],
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 0],
                    [2, 0, 1, 1, 2],
                ],
                solution: '(l` U` l) #redinvert (l` U l)',
                production: '',
            },
            {
                pattern: [
                    [2, 1, 1, 0, 2],
                    [0, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0],
                    [2, 0, 1, 1, 2],
                ],
                solution: 'F U R U` R2 F` R (U R U` R`)',
                production: '#red R` F R2 U R` U` F',
            },
            {
                pattern: [
                    [2, 0, 1, 1, 2],
                    [1, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0],
                    [0, 0, 0, 1, 0],
                    [2, 1, 1, 0, 2],
                ],
                solution: 'R` F R U R` F` R y` R U` R`',
                production: '',
            },
        ]
    },
    {
        title: "NO EDGES FLIPPED CORRECTLY",
        id: 'section-no-edges',
        patterns: [
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 0, 1],
                    [1, 0, 1, 0, 1],
                    [1, 0, 0, 0, 1],
                    [2, 0, 1, 0, 2],
                ],
                solution: 'R U2 R` #blue U2 #blue',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 1, 1, 2],
                    [1, 0, 0, 0, 0],
                    [1, 0, 1, 0, 1],
                    [1, 0, 0, 0, 0],
                    [2, 0, 1, 1, 2],
                ],
                solution: '[F #red F`] [f #red f`]',
                production: 'R U2 R` #blue U2 #blue',
            },
            {
                pattern: [
                    [2, 0, 0, 0, 2],
                    [0, 0, 0, 0, 1],
                    [1, 0, 1, 0, 1],
                    [1, 0, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: '[f #red f`] U` [F #red F`]',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [1, 0, 0, 1, 0],
                    [1, 0, 1, 0, 1],
                    [0, 0, 0, 0, 1],
                    [2, 1, 1, 0, 2],
                ],
                solution: '[f #red f`] U [F #red F`]',
                production: '[f #red f`] U` [F #red F`]',
            },
            {
                pattern: [
                    [2, 1, 1, 1, 2],
                    [0, 0, 0, 0, 0],
                    [1, 0, 1, 0, 1],
                    [0, 1, 0, 1, 0],
                    [2, 0, 0, 0, 2],
                ],
                solution: '[F #green F`] y` U2 #blue',
                production: '#green #blue U2 #blue',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 1, 0],
                    [1, 0, 1, 0, 1],
                    [1, 0, 0, 0, 1],
                    [2, 0, 1, 0, 2],
                ],
                solution: 'M U #red M` #blue',
                production: '',
            },
            {
                pattern: [
                    [2, 0, 1, 1, 2],
                    [0, 1, 0, 0, 0],
                    [1, 0, 1, 0, 1],
                    [1, 0, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: '#green #blue U2 #blue',
                production: '[F #green F`] y` U2 #blue',
            },
            {
                pattern: [
                    [2, 0, 1, 0, 2],
                    [0, 1, 0, 1, 0],
                    [1, 0, 1, 0, 1],
                    [0, 1, 0, 1, 0],
                    [2, 0, 1, 0, 2],
                ],
                solution: 'M U #red M2 (U R U` r`)',
                production: 'M U #red M2 (U R U` r`)',
            },
        ]
    }
]