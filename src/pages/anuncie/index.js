import Header from 'components/header';
import styles from './anuncie.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/button';
import { useForm } from 'react-hook-form';
import { cadastrarItem } from 'store/reducers/itens';

export default function Anuncie(){
    const dispatch = useDispatch();
    const categorias = useSelector(state => state.categorias.map(({ nome, id }) => ({ nome, id })));
    //função do componentes de UseState já configurado com o UseEffect
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            categoria: ''
        }
    });

    const { errors } = formState;

    function cadastrar(data){
        dispatch(cadastrarItem(data));
    }

    return(
        <div className={styles.container}>
            <Header
                titulo='Anuncie aqui!'
                description='Anuncie seu produto no melhor site do Brasil!'
            />
            <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
                <input className={errors.nome ? styles['input-erro'] : ''} {...register('titulo', { required: true })} placeholder='Nome do produto' alt='nome do produto'/>
                {errors.nome && <span className={styles['mensagem-erro']}> Informar nome do produto! </span>}
                <input className={errors.nome ? styles['input-erro'] : ''} {...register('descricao', { required: true })} placeholder='Descrição do produto' alt='descrição do produto'/>
                {errors.nome && <span className={styles['mensagem-erro']}> Informar descrição do produto! </span>}
                <input className={errors.nome ? styles['input-erro'] : ''} {...register('foto', { required: true })} placeholder='url da imagem do protudo' alt='url da imagem do protudo'/>
                {errors.nome && <span className={styles['mensagem-erro']}> Enviar url para obter foto do produto!</span>}
                <select className={errors.nome ? styles['input-erro'] : ''} {...register('categoria', { required: true })}>
                    <option value='' disabled >Selecione a categoria</option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
                {errors.nome && <span className={styles['mensagem-erro']}> Informar qual é a categoria do produto!</span>}
                <input className={errors.nome ? styles['input-erro'] : ''} {...register('preco', { required: true, valueAsNumber: true })} type='number' placeholder='preço do produto'/>
                {errors.nome && <span className={styles['mensagem-erro']}> Informar preço do produto! </span>}
                <Button type='submit'>
                    Cadastrar produto
                </Button>
            </form>
        </div>
    );
}