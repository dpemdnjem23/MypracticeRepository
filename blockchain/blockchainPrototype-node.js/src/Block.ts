
  
import { createHash } from "crypto";


//typescript 인터페이스
export type Block ={

    timestamp:number;
    data:string;
    prevBlockHash:string
    hash?:string;
}

//블록을 구성하는 필드를 하나로 이은 뒤 이어진 문자열에 대해 해시를 계산한다.

function setHash(block:Block): string{
    const timestamp = block.timestamp.toString();
    const headers = `${block.prevBlockHash}+${block.data,timestamp}`;
    return createHash('sha256').update(headers).digest('hex')
}

//블록 생성함수
export function NewBlock(data:string, prevBlockHash:string): Block {

  const block :Block={
      timestamp: Date.now(),
      data,
      prevBlockHash
  }



block.hash = setHash(block)
    return block
    
}