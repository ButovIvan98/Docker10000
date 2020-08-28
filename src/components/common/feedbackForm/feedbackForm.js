import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import Typography from '@material-ui/core/Typography';

const FeedbackForm = (props) => {
    debugger
    return <div className={'row'}>
        <div className={'col-12 text-center'}>
            <h4>{props.header}</h4>
        </div>
        <div className={'col-lg-6 col-12'}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Ваше имя"
                name="name"
                autoComplete="name"
                value={props.nameValue}
                onChange={(e) => (props.changeName(e.target.value))}
            />
        </div>
        <div className={'col-lg-6 col-12'}>
            <TextField
                error={props.validEmail || props.validPhone ? false : true}
                variant="outlined"
                margin="normal"
                fullWidth
                id="phone"
                label="Номер телефона"
                name="phone"
                autoComplete="phone"
                value={props.phoneValue}
                onChange={(e) => (props.changePhone(e.target.value, props.id))}
            />
        </div>
        <div className={'col-12'}>
            <TextField
                error={props.validEmail || props.validPhone ? false : true}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={props.emailValue}
                onChange={(e) => (props.changeEmail(e.target.value, props.id))}
            />
        </div>
        <div className={'col-12 mt-3'}>
            <TextField
                id="outlined-multiline-static"
                label="Текст сообщение"
                fullWidth
                multiline
                rows="4"
                variant="outlined"
                value={props.textValue}
                onChange={(e) => (props.changeText(e.target.value))}
            />
        </div>
        <div className={'col-12 mt-4'}>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => { props.buttonClick(props.statusMessage, props.validEmail, props.validPhone, props.id) }}
            >
                Отправить сообщение
    </Button>
        </div>
    </div>
}
export default FeedbackForm;