const Container = ({ children }:any) => {
  return (
    <div style = {{ 
      'maxWidth': '960px',
      // 'marginTop': '100px',
      'marginLeft': 'auto',
      'marginRight': 'auto', 
    }}>{ children }</div>
  )
}

export default Container