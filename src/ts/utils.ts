export const trimDecimals = (original: number, decimals: number): number => {
    return parseFloat(original.toFixed(decimals))
};