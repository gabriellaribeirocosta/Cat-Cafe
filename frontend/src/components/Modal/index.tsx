import { useEffect, useState } from 'react'
import Button from '../Button/index.tsx'
import Input from '../Input/index.tsx'
import styles from './style.module.css'
import ProductService from '../../services/product/product.service.ts'

interface Product {
  id?: number
  name: string
  price: number
  category: string
  description: string
}

interface Cat {
  id?: number
  name: string
  race: string
  category: string
  description: string
}

interface ModalProps {
  model?: Product | Cat
  modelType: 'Product' | 'Cat'
  action: 'Update' | 'Create'
  closeModal: () => void
}

const Modal = ({ model, modelType, action, closeModal }: ModalProps) => {
  const [modelName, setModelName] = useState<string>('')
  const [productPrice, setProductPrice] = useState<number>(0)
  const [catRace, setCatRace] = useState<string>('')
  const [modelCategory, setModelCategory] = useState<string>('')
  const [modelDescription, setModelDescription] = useState<string>('')
  const [category1, setCategory1] = useState<string>('')
  const [category2, setCategory2] = useState<string>('')
  const [category3, setCategory3] = useState<string>('')
  const [column, setColumn] = useState<string>('')

  useEffect(() => {
    if (action === 'Update' && model) {
      setModelName(model.name)
      setModelCategory(model.category)
      setModelDescription(model.description)
      if (modelType === 'Product' && 'price' in model) {
        setProductPrice(model.price)
        setColumn('Price')
        setCategory1('Drink')
        setCategory2('Desert')
        setCategory3('Snack')
      } else if (modelType === 'Cat' && 'race' in model) {
        setCatRace(model.race)
        setColumn('Race')
        setCategory1('Puppy')
        setCategory2('Adult')
        setCategory3('Elder')
      }
    }
    if (modelType === 'Product') {
      setCategory1('Drink')
      setCategory2('Desert')
      setCategory3('Snack')
    } else if (modelType === 'Cat') {
      setCategory1('Puppy')
      setCategory2('Adult')
      setCategory3('Elder')
    }
  }, [model, modelType, action])

  const handleSubmit = async () => {
    if (modelType === 'Product') {
      const newModel = {
        name: modelName,
        description: modelDescription,
        category: modelCategory,
        price: productPrice,
      }
      try {
        if (newModel) {
          await ProductService.create(newModel as Product)
          closeModal()
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    switch (name) {
      case 'modelName':
        setModelName(value)
        break
      case 'productPrice':
        setProductPrice(parseFloat(value))
        break
      case 'catRace':
        setCatRace(value)
        break
      case 'modelCategory':
        setModelCategory(value)
        break
      case 'modelDescription':
        setModelDescription(value)
        break
      default:
        break
    }
  }

  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <h1 className={styles.title}>
          {action} {modelType}
        </h1>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor={'modelName'}>Name</label>
            <Input
              type={'text'}
              placeholder={`Enter the ${modelType} name`}
              onChange={handleChange}
              name={'modelName'}
              id={'modelName'}
              title={'Enter only letters, at least 3 characters'}
              pattern={'[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$'}
              required
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              {modelType === 'Product' && (
                <>
                  <label htmlFor={'productPrice'}>Price</label>
                  <Input
                    type={'number'}
                    placeholder={`Enter the Product price`}
                    onChange={handleChange}
                    name={'productPrice'}
                    id={'productPrice'}
                    title={'Enter a integer number'}
                    pattern={'d+(,d{1,2})?$'}
                    inputClass={`${styles.productPrice}`}
                    required
                  />
                </>
              )}
              {modelType === 'Cat' && (
                <>
                  <label htmlFor={'catRace'}>Race</label>
                  <Input
                    type={'text'}
                    placeholder={`Enter the Cat race`}
                    onChange={handleChange}
                    name={'catRace'}
                    id={'catRace'}
                    title={'Enter at least 3 characters'}
                    pattern={'.{3,}$'}
                    required
                  />
                </>
              )}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor={'modelCategory'}>Category</label>
              <select
                id={'modelCategory'}
                name={'modelCategory'}
                value={modelCategory}
                onChange={handleChange}
                className={styles.categories}
                required
              >
                <option className={styles.category} value={''}>
                  Select a Category
                </option>
                <option className={styles.category} value={category1}>
                  {category1}
                </option>
                <option className={styles.category} value={category2}>
                  {category2}
                </option>
                <option className={styles.category} value={category3}>
                  {category3}
                </option>
              </select>
            </div>
          </div>
          <div
            className={`${styles.inputContainer} ${styles.inputDescription}`}
          >
            <label htmlFor={'modelDescription'}>Description</label>
            <Input
              type={'text'}
              placeholder={`Enter the ${modelType} description`}
              onChange={handleChange}
              name={'modelDescription'}
              id={'modelDescription'}
              title={'Enter at least 3 characters'}
              pattern={'.{3,}$'}
              required
            />
          </div>
          <div className={styles.buttons}>
            <Button onClick={closeModal} className={styles.cancel}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>{action}</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
