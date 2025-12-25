import Header from '~/layouts/components/Header';

function HeaderOnly({ chilrden }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{chilrden}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
