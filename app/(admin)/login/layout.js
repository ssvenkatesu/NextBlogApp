
let Layout=({ children })=> {
  return (
 
    <>
        <nav style={{ display:'flex',justifyContent:'space-between',backgroundColor: "#00d8f4ff", color:'black',padding: "1rem" }}>
          <h2>Admin Navbar</h2>
        </nav>
        <main>{children}</main></>
     
  );
}

export default Layout