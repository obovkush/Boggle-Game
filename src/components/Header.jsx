import { PageHeader, Divider } from 'antd'

const Header = () => {
  return (
      <>
        <PageHeader
          className='site-page-header'
          title="Boggle Game"
          subTitle="Classic mini game"
          avatar={{ src: 'https://yt3.ggpht.com/ytc/AKedOLRk5QtsAu_ho__HJvzMZ1h8rwW7ZWjP88w80HXuIg=s900-c-k-c0x00ffffff-no-rj' }}
        />
        <Divider orientation="center" plain>
          oBovkush@gmail.com
        </Divider>
      </>
      
  )
};

export default Header
