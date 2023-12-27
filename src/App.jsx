import "bootstrap/dist/css/bootstrap.min.css"
import Container from "./components/container"
import First from "./components/firstcomp"
import Second from "./components/secondComp"

export default function App(){
  return(
    <div className="d-flex">
      <Container>
        <First/>
      </Container>
      <Container>
        <Second/>
      </Container>
    </div>
  )
}