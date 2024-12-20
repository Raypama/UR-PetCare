import FooterH from "../organisms/FooterH"
import HeaderH from "../organisms/HeaderH"
import { Helmet } from 'react-helmet'

interface MainTemplateProps {
  children: React.ReactNode
  pageTitle: string
}

function MainTemplate({ children, pageTitle }: MainTemplateProps) {
  return (
    <div>
      <div>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      </div>
      <div className="flex flex-col min-h-screen justify-between">
        <div >
          <HeaderH />
          <div className="p-4 mt-3">
            {children}
          </div>
        </div>
        <FooterH />
      </div>
    </div>
  )
}

export default MainTemplate
