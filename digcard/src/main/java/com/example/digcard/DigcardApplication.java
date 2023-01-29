package com.example.digcard;

import com.example.digcard.entity.CardEntity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DigcardApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigcardApplication.class, args);
	}

}


// POST /v1/card/create
// Request: {
//                name: String,
//                job: String,
//                email: String,
//                author: String
//           }
// 입력받은 값을 디비에 넣고 명함 고유 키값을 리턴
// Response: { id: String, err?: String }

// GET /v1/card/${id: String} => id 값을 가진 명함을 조회한다
// 입력받은 고유 키값을 가지고 디비에서 데이터 찾아서 리턴
// Response: {
// 				card: {
//                name: String,
//                job: String,
//                email: String,
//                author: String
//            	},
//            	err?: String
//            }