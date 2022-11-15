export const trimDecimals = (original: number, decimals: number): number => {
    return parseFloat(original.toFixed(decimals))
};

interface DictWithNumbers{
    [key: string] : number;
}

export const filterMaxValueInDict = (dict: DictWithNumbers) => {
    const max = Object
        .values(dict)
        .sort((a: number, b: number) => a - b)
        .reverse()[0]
    return max;
}