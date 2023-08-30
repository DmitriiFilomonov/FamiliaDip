import React from 'react';

class HeaderAdmin extends React.Component{

    render(){
        return(
            <>
                <header>
                    <div className="admin__container__button">
                        <button className="button__item" onClick={() => this.props.checkProps(1)}>Мастера</button>
                        <button className="button__item" onClick={() => this.props.checkProps(2)}>Услуги</button>
                        <button className="button__item" onClick={() => this.props.checkProps(3)}>Специализации</button>
                        <button className="button__item" onClick={() => this.props.checkProps(4)}>Записи</button>
                    </div>
                </header>
            </>
        )
    }
}

export default HeaderAdmin
