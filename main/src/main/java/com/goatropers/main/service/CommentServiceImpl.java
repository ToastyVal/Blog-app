package com.goatropers.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goatropers.main.model.Comment;
import com.goatropers.main.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comment saveComment(Comment comment) {
        // TODO Auto-generated method stub
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> getAllComments() {
        // TODO Auto-generated method stub
        return commentRepository.findAll();
    }

}
