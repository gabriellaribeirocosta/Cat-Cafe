import { ChangeEvent, useEffect, useState } from 'react'
import Button from '../Button/index.tsx'
import Input from '../Input/index.tsx'
import styles from './style.module.css'

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
}

const Modal = ({ model, modelType, action }: ModalProps) => {
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

  const handleCancel = () => {
    setModelName('')
    setModelCategory('')
    setModelDescription('')
    if (modelType === 'Product') {
      setProductPrice(0)
    } else if (modelType === 'Cat') {
      setCatRace('')
    }
  }

  const handleSubmit = () => {}

  const onChange = () => {}

  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <h1 className={styles.title}>
          {action} {modelType}
        </h1>
        <form className={styles.form}>
          <div>
            <label htmlFor={'modelName'}>Name</label>
            <Input
              type={'text'}
              placeholder={`Enter the ${modelType} name`}
              onChange={onChange}
              name={'modelName'}
              id={'modelName'}
              title={'Enter only letters, at least 3 characters'}
              pattern={'[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$'}
              required
            />
          </div>
          <div className={styles.inputRow}>
            <div>
              {modelType === 'Product' && (
                <>
                  <label htmlFor={'productPrice'}>Price</label>
                  <Input
                    type={'number'}
                    placeholder={`Enter the Product price`}
                    onChange={onChange}
                    name={'productPrice'}
                    id={'productPrice'}
                    title={'Enter a integer number'}
                    pattern={'d+(,d{1,2})?$'}
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
                    onChange={onChange}
                    name={'catRace'}
                    id={'catRace'}
                    title={'Enter at least 3 characters'}
                    pattern={'.{3,}$'}
                    required
                  />
                </>
              )}
            </div>
            <div className={styles.content}>
            <label htmlFor={'modelCategory'}>Category</label>
            <select
              id={'modelCategory'}
              name={'modelCategory'}
              value={modelCategory}
              onChange={onChange}
              required
            >
              <option value={''}>Select a Category</option>
              <option value={category1}>{category1}</option>
              <option value={category2}>{category2}</option>
              <option value={category3}>{category3}</option>
            </select>
            </div>
          </div>
          <div>
            <label htmlFor={'modelDescription'}>Description</label>
            <Input
              type={'text'}
              placeholder={`Enter the ${modelType} description`}
              onChange={onChange}
              name={'modelDescription'}
              id={'modelDescription'}
              title={'Enter at least 3 characters'}
              pattern={'.{3,}$'}
              required
            />
          </div>
          <div className={styles.buttons}>
            <Button onClick={handleCancel} buttonClassName={styles.cancel}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {action} {modelType}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
