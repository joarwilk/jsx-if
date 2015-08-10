module.exports = {
  if: function(condition, content) {
    if (condition) {
      return typeof content === 'function' ? content() : content;
    }

    if (arguments.length > 2) {
      for (var i = 2;i < arguments.length;i++) {
        var arg = arguments[i];
        var argumentContent = arg.contentIsFunction ? arg.content() : arg.content;

        if ((arg.isElseIf && arg.condition) || arg.isElse) {
          return argumentContent;
        }
      }
    }
  },

  elseif: function(condition, content) {
    return {
      isElseIf: true,
      condition: condition,
      content: content,
      contentIsFunction: typeof content === 'function'
    }
  },

  else: function(content) {
    return {
      isElse: true,
      content: content,
      contentIsFunction: typeof content === 'function'
    };
  }
};