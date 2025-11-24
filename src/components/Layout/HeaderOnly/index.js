import Header from '~/components/Layout/DefaultLayout/Header';

function DefaultLayout({ chilrden }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{chilrden}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
