import Titulo from "../common/Titulo";
import titulosDescricoes from "../../../js/titulosDescricoes.js";
import { useState } from "react";
import emailJs from '@emailjs/browser';
import Review from "./Review";
import reviewsclientes from "../../../js/reviewsclientes";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

export default function ConversaoReviews() {
    const [envioSucesso, setEnvioSucesso] = useState(false);
    const [envioFalhou, setEnvioFalhou] = useState(false);
    const [aguardeEnvio, setAguardeEnvio] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();


    const enviarEmail = (data) => {
        const { nome, email, telefone, mensagem } = data;

        if (!nome || !email || !telefone || !mensagem) {
            alert("Preencha todos os campos");
        } 
        else {
            const templateParams = {
                from_name: nome,
                message: mensagem,
                email: email,
                tel: telefone
            };
            exibirAguardeProcessamento();
            emailJs.send("service_zke41p9", "template_4mlvp75", templateParams, "mMwq80vFq078Vm7Ke")
                .then((response) => {
                    reset();
                    setValue("telefone", "");
                    exibirFeedbackSucesso();
                })
                .catch((err) => {
                    exibirFeedbackFalha();
                });
        }
    };

    function exibirFeedbackSucesso() {
        setEnvioSucesso(true);
        setTimeout(() => {
            setEnvioSucesso(false);
        }, 3000);
    }

    function exibirFeedbackFalha() {
        setEnvioFalhou(true);
        setTimeout(() => {
            setEnvioFalhou(false);
        }, 3000);
    }

    function exibirAguardeProcessamento() {
        setAguardeEnvio(true)
        setTimeout(() => {
            setAguardeEnvio(false);
        }, 3000);
    }

    return (
        <section id="conversaoReviews">
            <div className="containerConversaoReviews">
                <div className="conversao">
                    <div>
                        <Titulo titulo={titulosDescricoes["conversao"].titulo} />
                        <p>{titulosDescricoes["conversao"].subtitulo}</p>
                    </div>

                    <form onSubmit={handleSubmit(enviarEmail)}>
                        <label>Nome:</label>
                        <input
                            type="text"
                            {...register("nome", { required: true })}
                        />
                        {errors.nome && <p>Por favor, preencha o nome.</p>}

                        <label>E-mail:</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                            })}
                        />
                        {errors.email?.type === "required" && (
                            <p>Por favor, preencha o e-mail.</p>
                        )}
                        {errors.email?.type === "pattern" && (
                            <p>Por favor, insira um e-mail válido.</p>
                        )}

                        <label>Telefone:</label>
                        <InputMask
                            mask="(99) 99999-9999"
                            maskChar={null}
                            {...register("telefone", { required: true })}
                        >
                            {(inputProps) => <input type="text" {...inputProps} />}
                        </InputMask>
                        {errors.telefone && <p>Por favor, preencha o telefone.</p>}

                        <label>Mensagem:</label>
                        <textarea {...register("mensagem", { required: true })}></textarea>
                        {errors.mensagem && <p>Por favor, preencha a mensagem.</p>}

                        <div className="permissao">
                            <input type="checkbox" name="" id="" required />
                            <p>Eu aceito os termos, <a href="./termo.html" target="_blank">clique para ler</a></p>
                        </div>

                        <input type="submit" value="Enviar" />
                    </form>

                    {envioSucesso && (
                        <div className="feedback feedback-sucesso">
                            O email foi enviado com sucesso!
                        </div>
                    )}

                    {envioFalhou && (
                        <div className="feedback feedback-falha">
                            Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.
                        </div>
                    )}
                    {aguardeEnvio && (
                        <div className="feedback feedback-aguarde">
                            Aguarde, estamos enviando seu email.
                        </div>
                    )}
                </div>

                <div className="provaSocial">
                    <div className="containerborda">
                        <Review nome={reviewsclientes[0].nome} image={reviewsclientes[0].imagem} avaliacao={reviewsclientes[0].avaliacao} />
                        <Review nome={reviewsclientes[1].nome} image={reviewsclientes[1].imagem} avaliacao={reviewsclientes[1].avaliacao} />
                        <Review nome={reviewsclientes[2].nome} image={reviewsclientes[2].imagem} avaliacao={reviewsclientes[2].avaliacao} />
                    </div>
                </div>
            </div>
        </section>
    );
}
