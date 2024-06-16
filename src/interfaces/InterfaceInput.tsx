export interface InputInterface {
    width: number,
    placeholder: string,
    color?: string,
    fontSize?: number,
    border?: number,
    onChangeText: (e:string) => void
}