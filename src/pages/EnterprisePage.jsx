import EnterpriseTable from '../components/AdminPanel/EnterpriseTable'
import Sidebar from '../layouts/Sidebar/Sidebar'



function EnterprisePage() {
    return (
        <>
            <Sidebar>
                <div style={{width:'100%', height: '100%', padding: '100px 0px 30px 0px'}}>
                    <EnterpriseTable />
                </div>
            </Sidebar>
        </>
    )
}

export default EnterprisePage