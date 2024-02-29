import { Nabvar } from '../components/Nabvar'

export default function NavbarLayout({ children }) {
    return (
      <>
        <Nabvar />
        { children }
      </>
    )
   }