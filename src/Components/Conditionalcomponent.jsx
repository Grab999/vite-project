import Welcome from "./welcome";
import Code from "./Code";


export default function conditionalcomponent () {
    const display = false
    return display ? <Welcome />: <Code />;
  
}