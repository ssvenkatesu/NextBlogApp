
let Layout=({ children })=> {
  return (

    <>
        <nav style={{ display:'flex',justifyContent:'space-between',backgroundColor: "#eb090dff", color:'black',padding: "1rem" }}>
          <h2>User Navbar</h2>
          
        </nav>
        <main>{children}</main></>
     
  );
}

export default Layout