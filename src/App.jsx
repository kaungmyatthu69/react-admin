import {ColorModeContext,useMode} from "./Theme.js";
import {ThemeProvider} from "@mui/material";
import TopBar from "./sences/global/TopBar.jsx";
import CssBaseline from '@mui/material/CssBaseline';
import {Routes,Route} from "react-router-dom";
import Dashboard from "./sences/dashboard";
import SideBar from "./sences/global/SideBar.jsx";
import Team from "./sences/team";
import Invoices from "./sences/invoices";
import Contacts from "./sences/contacts";
import Bar from "./sences/bar";
import Form from "./sences/form";
import Line from "./sences/line";
import Pie from "./sences/pie";
import FAQ from "./sences/faq";
import Geography from "./sences/geography"
import Calendar from "./sences/calendar"
function App() {
const [theme,colorMode]=useMode()

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <main className='content'>
              <TopBar/>
              <Routes>
                <Route path={'/'} element={<Dashboard/>} />
                <Route path={'/team'} element={<Team/>} />
                <Route path={'/contacts'} element={<Contacts/>} />
                <Route path={'/invoices'} element={<Invoices/>} />
                <Route path={'/bar'} element={<Bar/>} />
                <Route path={'/form'} element={<Form/>} />
                <Route path={'/line'} element={<Line/>} />
                <Route path={'/pie'} element={<Pie/>} />
                <Route path={'/faq'} element={<FAQ/>} />
                <Route path={'/geography'} element={<Geography/>} />
                <Route path={'/calendar'} element={<Calendar/>} />
              </Routes>
            </main>


          </div>
        </ThemeProvider>

      </ColorModeContext.Provider>
    </>
  )
}

export default App
