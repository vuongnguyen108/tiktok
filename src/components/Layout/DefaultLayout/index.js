import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ chilrden }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{chilrden}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
