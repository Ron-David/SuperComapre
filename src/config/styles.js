const container = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const box = {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const card = {
    display: 'flex',
    alignItems: 'center',
    height: '8rem',
    my: '1rem'
}
const button = {
    width: '100%',
    marginBottom: '1rem',
    color: 'green',
    border: '1px solid green',
    padding: '0.8rem',
    borderRadius: '4px',
}
const imgContainer = selected => ({
    display: 'flex',
    alignItems: 'center',
    width: '7rem',
    my: '1rem',
    borderRadius: '8px',
    height: '8rem',
    justifyContent: 'center',
    border: `1px solid ${selected ? 'blue' : '#eee'}`,

})
export {
    button,
    container,
    card,
    imgContainer,
    box
}