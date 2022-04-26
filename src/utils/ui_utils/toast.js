import store from "@/store";
import { Button, Modal, Notification } from "@douyinfe/semi-ui";
import { Provider } from "react-redux";

function showNotic(type = 'success', opt = { content: ` ` }) {
	Notification[type](opt)
}
const ProModal = (Content, title, cb = function () { }, Footer = null,) => {
	const initProps = {
		icon: false,
	};

	const _modal = Modal.info({
		...initProps,
		onCancel: () => {
			_modal.destroy()
		},
		title,
		content: <Provider store={store}>{Content}</Provider>,
		footer: Footer ? () => {
			return Footer;
		} : null,
	});
	ModalFooter.close = async (custom_run) => {
		if (!custom_run) await cb()
		else
			if (typeof custom_run === 'function') {
				custom_run()
			}
		_modal.destroy()
	}
};

const ModalFooter = ({ onOk }) => {
	return <div className="modal-footer flex" style={{ justifyContent: 'flex-end', padding: '2rem 0 ' }}>
		<Button
			style={{ marginRight: '1rem' }}
			onClick={async () => await ModalFooter.close()}>
			cencel
		</Button>
		<Button
			theme='solid'
			onClick={async () => {
				await onOk();
				await ModalFooter.close();
			}}>
			confirm
		</Button>
	</div>
}
ModalFooter.close = async (custom_run) => Promise.resolve(true)

export {
	showNotic,
	ProModal,
	ModalFooter
}