import Header from '~/components/Layout/components/Header';

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
