import * as React from "react";
import { inject, observer } from "mobx-react";
import { Button, notification } from "antd";
import { RouterStore } from "mobx-react-router";
// import "antd/dist/antd.css";
import "../../antd.css";

const s = require("./style.scss");
const photo = require("../../assets/img/personalPhoto.jpg");

interface IProps {
	routerStore: RouterStore;
}

@inject("routerStore")
@observer
export class Home extends React.Component<IProps, {}> {
	private goTo = (path: string) => {
		this.props.routerStore.push(path);
	};

	private openNotification = () => {
		notification.warning({
			message: "Opss...",
			description: "Infelizmente as máquinas não permitiram essa ação ainda",
			duration: 4,
		});
	}

	public render() {
		return (
			<div className={s.container}>
				<div className={s.contentBox}>
					<div className={s.photoDiv}>
						<img src={photo} className={s.photo} alt="Avatar" />
					</div>
					<label className={s.namePhrase}>Olá! Eu sou o João Tavares</label>
					<label className={s.welcomePhrase}>
						Seja bem-vindo ao meu site pessoal
					</label>
					<label className={s.welcomePhrase}>
						Fique a vontade para escolher o caminho da sua visita
					</label>
					<div className={s.buttonsRow}>
						<Button
							type="primary"
							className={s.buttonProfile}
							onClick={() => this.goTo("/profile")}
						>
							Perfil <br /> Profissional
						</Button>
						<Button
							type="primary"
							className={s.buttonBlog}
							onClick={this.openNotification}
						>
							Blog <br /> Pessoal
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
