import patterns from './../data/patterns';

const algorithmPatterns = {
    '#green': { value: '(R U R` U`)', color: 'color-green' },
    '#green2': { value: '(r U R` U)', color: 'color-green' },
    '#greeninvert': { value: '(L` U` L U`)', color: 'color-green' },
    '#red': { value: '(R U R` U`)', color: 'color-red' },
    '#red2': { value: '(r U R` U`)', color: 'color-red' },
    '#redinvert': { value: '(L` U` L U)', color: 'color-red' },
    '#blue': { value: '(R` F R F`)', color: 'color-blue' },
    '#blue2': { value: '(r` F R F`)', color: 'color-blue' },
    '#blue3': { value: '(R` F R` F`)', color: 'color-blue' },
    '#blueinvert': { value: '(L F` L` F)', color: 'color-blue' },
}

function areMatricesEqual(matrix1: number[][], matrix2: number[][]): boolean {
    if (matrix1.length !== matrix2.length) {
        return false;
    }

    for (let i = 0; i < matrix1.length; i++) {
        if (matrix1[i].length !== matrix2[i].length) {
            return false;
        }

        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) {
                return false;
            }
        }
    }

    return true;
}

export function getAlgorithmPattern(pattern: string): { value: string; color: string } {
    const result = algorithmPatterns[pattern];
    if (result) { return result; }

    return { value: pattern, color: '' };
}


export function findPattern(pattern: number[][]): HTMLElement {
    // @TODO (!important) should support rotated pattern

    outerLoop:
    for (const section of patterns) {
        for (const p of section.patterns) {
            if (areMatricesEqual(pattern, p.pattern)) {
                const el = document.getElementById(section.id);
                if (!el) {
                    alert('Where is the section?');
                    break outerLoop;
                }

                return el as HTMLElement;
            }
        }
    }

    return null;
}