function FooterItem(props) {
    return (
        <div className="kontak">
            <img src={props.image} alt={props.alt} />
            <a href={props.href}>{props.text}</a>
        </div>
    );
}

export default FooterItem;