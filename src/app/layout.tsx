'use client'
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/style.css'
import 'react-toastify/dist/ReactToastify.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { ToastContainer, toast } from 'react-toastify';
import { store } from '../store/index'
import { Provider } from 'react-redux';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Provider store={store}>
          <AntdRegistry >{children}</AntdRegistry>
        </Provider>
        <ToastContainer />
      </body>
    </html>
  );
}
