import TableStyle,{Table1,Td,TextContainer,Email} from './TableStyle'
import { UserProfile } from '../UserProfile/UserProfile' 

export const Table = () => {
  return(
    <Table1>
      <TextContainer>
        <UserProfile />
        <h1>김멍멍</h1>
        <Email>zzpp430@gmail.com</Email>
        <a href="#">개인정보 수정</a>
      </TextContainer>
      <Td>
        
      </Td>
    </Table1>
  )
}