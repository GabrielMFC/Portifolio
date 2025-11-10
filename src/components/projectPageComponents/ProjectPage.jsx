import Page from "../Page"

export default function ProjectPage() {
    return(
        <>
        <Page title={"Projetos"} subTitle={'"Atividades"'} text={"Os botões abaixo, iram lhe redirecionar paras as principais atividades do sujeito."} Notes={
            <Notes info={{name:"Gabriel Matias", age: 19, whats: "(+55) 24 998771866", email: "ggezcom991gh@gmail.com"}}/>
        } PhotoContainer={
            <PhotoContainer/>
        }
        SwitchProject={<SwitchProject/>}
        />
        </>
    )
}