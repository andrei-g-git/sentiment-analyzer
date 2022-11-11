export const trimDecimals = (original: number, decimals: number): number => {
    return parseFloat(original.toFixed(decimals))
};

interface DictWithNumbers{
    [key: string] : number;
}

export const filterMaxValueInDict = (dict: DictWithNumbers) => {
    let newDict = dict;
    const max = Object
        .values(newDict)
        .sort((a: number, b: number) => a - b)
        .reverse()[0]

    return Object
        .keys(dict)
        .filter((key: string) => {
            return dict[key] === max;
        });
}