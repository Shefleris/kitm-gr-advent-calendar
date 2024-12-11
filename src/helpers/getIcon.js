const getIcon = (day) => {
    const iconMap = {
        1:'2',
        3:'1',
        5:'5',
        8:'1',
        10:"fa",
        12:'18',
        13:'?',
        15:'?',
        17:'5',
        20:'?',
        22:'>',
        24:'!'
    };
    return iconMap[day] || null;
}
export default getIcon