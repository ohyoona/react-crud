package com.example.demo.Controller;

import com.example.demo.Entity.People;
import com.example.demo.Repository.PeopleRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class PeopleController {

    @Autowired
    private PeopleRepository peopleRepository;

    @GetMapping("/people")
    public List<People> getAllPeople(){
        System.out.printf("리스트");
        return peopleRepository.findAll();
    }

    @PostMapping("/people2")
    public People savePeople(@RequestBody People people){
        System.out.println("생성");
        return peopleRepository.save(people);
    }

    @PutMapping("/people3")
    public People updatePeople(@RequestBody People people){
        System.out.println("업데이트");
        return peopleRepository.save(people);
    }

    @GetMapping("/people4/{id}")
    public People getOne(@PathVariable Long id){
        System.out.printf("정보불러오기");
        return peopleRepository.findById(id).get();
    }
}
