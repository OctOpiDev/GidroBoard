import React from 'react'
import { Layout } from 'antd';



const FooterApp = () => {
  return (
    <Layout.Footer style={{
        textAlign: 'center',
      }}>
       WaterFlows © {new Date().getFullYear()} 
    </Layout.Footer>
  )
}
export default FooterApp;