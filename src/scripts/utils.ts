const patterns = {
    '#green': '(R U R` U`)',
    '#green2': '(r U R` U)',
    '#greeninvert': '(L` U` L U`)',
    '#red': '(R U R` U`)',
    '#red2': '(r U R` U`)',
    '#redinvert': '(L` U` L U)',
    '#blue': '(R` F R F`)',
    '#blue2': '(r` F R F`)',
    '#blue3': '(R` F R` F`)',
    '#blueinvert': '(L F` L` F)',
}

export function getPattern(pattern: string): string {
    const result = patterns[pattern];
    if (result) { return result; }

    return pattern;
}