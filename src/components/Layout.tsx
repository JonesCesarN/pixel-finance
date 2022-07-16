import { useTheme } from "next-themes";
import Head from "next/head";
import Image from 'next/image';
import { ReactNode, useEffect, useState } from "react";
import Logo from '../../public/logo.svg';
import { styled } from "../../stitches.config";
import CrossIcon from "../assets/CrossIcon";
import HamburgerIcon from "../assets/HamburgerIcon";
import MoonIcon from "../assets/MoonIcon";
import SunIcon from '../assets/SunIcon';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'piXel Finance' }: Props) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark')
  const toggleMenu = () => menuOpen ? setMenuOpen(false) : setMenuOpen(true)

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
      <Container>
        <Header>
          <Button onClick={toggleMenu}>
            {menuOpen
              ? <CrossIcon width={25} />
              : <HamburgerIcon width={25} />
            }
          </Button>
          <div style={{ width: 100 }}>
            <Image src={Logo} layout='responsive' />
          </div>
          <Button onClick={toggleTheme}>
            {theme === 'light'
              ? <MoonIcon width={25} />
              : <SunIcon width={25} />
            }
          </Button>
        </Header>
        <Main>
          {children}
        </Main>
      </Container>
    </>
  )
};

export default Layout;

const Main = styled('div', {
  px: '$2',
  display: "flex",
  flexDirection: "column",
  gap: '$2',
})

const Container = styled('div', {
  width: '$sm',
  minHeight: '100vh',
  height: "100%",
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  gap: '$2',
  backgroundColor: '$gray1'
})

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '$2',
})

const Button = styled("button", {
  backgroundColor: 'transparent',
  border: 0,

  [`& .HamburgerIcon`]: {
    color: '$yellow11'
  },

  [`& .CrossIcon`]: {
    color: '$red11'
  },

});
