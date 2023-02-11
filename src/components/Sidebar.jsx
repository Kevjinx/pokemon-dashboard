import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar  } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


const SidebarComponent = () => {
	const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
				<button onClick={() => collapseSidebar()}>Collapse</button>
        <Menu>
					<MenuItem component={<Link to="/about" />}> about</MenuItem>
					<MenuItem component={<Link to="/contact" />}> contact</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarComponent;