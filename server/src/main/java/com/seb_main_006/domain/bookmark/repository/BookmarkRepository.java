package com.seb_main_006.domain.bookmark.repository;

import com.seb_main_006.domain.bookmark.entity.Bookmark;
import com.seb_main_006.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

    Integer countBookmarksByMember(Member member);
}