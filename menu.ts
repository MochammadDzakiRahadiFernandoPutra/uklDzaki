type MenuType = {
    label: string,
    destination: string
}
export const menuItem: MenuType[] = [
    {
        label: `Home`,
        destination: `/`
    },
    {
    label: `Writer`,
        destination: `/writers`
    },
    {
    label: `Books`,
        destination: `/reading-book`
    }
]