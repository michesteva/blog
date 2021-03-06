module Jekyll

  class TagPage < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tags_item.html')
      self.data['tag'] = tag

      tag_title_prefix = site.config['tag_title_prefix'] || 'Tag: '
      self.data['title'] = "#{tag_title_prefix}#{tag}"
      self.data['title_meta'] = "#{tag.capitalize}"
      self.data['description'] = "#{tag.capitalize} posts in the CartoDB Blog. All things CartoDB"
    end
  end

  class TagGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'tags_item'
        dir = site.config['tag_dir'] || 'tagged'

        site.tags.keys.each do |tag|
          site.pages << TagPage.new(site, site.source, File.join(dir, tag), tag)
        end
      end
    end
  end

end
