import './styles/AppFrame.scss';
import Header from './Header';

export default function AppFrame({children}: {children: React.ReactNode}) {
    return (
        <div className="App">
            <Header />
            <main className="main">
                {children}
            </main>
        </div>
    );
}
