export const customStylesPrice = {
    control: base => ({
        ...base,
        borderRadius: '14px',
        width: '148px',
        height: '48px',
        backgroundColor: 'var(--main-bcg)',
        border: 'none',
        boxShadow: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'var(--main-accent)',
        },
    }),
    menu: base => ({
        ...base,
        borderRadius: '12px',
        width: '148px',
        boxShadow: '0 4px 36px 0 rgba(18, 20, 23, 0.2)',
        backgroundColor: '#ffffff',
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingLeft: '18px',
        paddingRight: '18px',
    }),
    option: (base, state) => ({
        ...base,
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '1.11',
        color: 'rgba(18, 20, 23, 0.2)',
        backgroundColor: state.isSelected ? 'var(--main-accent-light)' : 'transparent',
        cursor: 'pointer',
        '&:hover': {
            color: 'var(--main-color)',
            backgroundColor: 'var(--main-accent-light)',
        },
    }),
    menuList: base => ({
        ...base,
        overflowY: 'auto',
        overflowX: 'hidden',
        height: '132px',

        '&::-webkit-scrollbar': {
            width: '4px',
        },

        '&::-webkit-scrollbar-thumb': {
            background: 'var(--main-accent)',
            borderRadius: '10px',
        },
    }),
    placeholder: base => ({
        ...base,
        color: 'var(--main-color)',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.25',
    }),
    indicatorSeparator: base => ({
        ...base,
        display: 'none',
    }),
    dropdownIndicator: base => ({
        ...base,
        color: 'var(--main-color)',
    }),
    clearIndicator: base => ({
        ...base,
        color: 'var(--main-color)',
    }),
};
