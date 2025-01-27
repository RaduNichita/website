---
slug: beman-lazy  # URL slug for the post
title: "Beman Lazy"  # Title of the post
authors: ["RaduNichita"]  # Author(s) of the post
tags: ["project", "paper implementation"]
---

This is a post about Beman Lazy.

<!-- truncate -->

`beman::execution::lazy<T, Context>` is a class template which
is used as the the type of coroutine tasks. The corresponding objects
are senders.  The first template argument (`T`) defines the result
type which becomes a `set_value_t(T)` completion signatures. The
second template argument (`Context`) provides a way to configure
the behavior of the coroutine. By default it can be left alone.