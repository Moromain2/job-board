const Footer = ({student_name, student_url}) => {
    return (
        <footer>
            <div className="container">
                Made with <a href="https://react.dev/">React</a> at <a href="https://www.lereacteur.io/">Le Reacteur</a> by <a href={student_url}>{student_name}</a>
            </div>
        </footer>
    )
}

export default Footer;