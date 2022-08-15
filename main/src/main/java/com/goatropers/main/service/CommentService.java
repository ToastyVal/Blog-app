package com.goatropers.main.service;

import java.util.List;

import com.goatropers.main.model.Comment;

public interface CommentService {
    public Comment saveComment(Comment comment);

    public List<Comment> getAllComments();
}
